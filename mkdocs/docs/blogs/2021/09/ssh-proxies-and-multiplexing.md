# ssh, proxies and multiplexing

It can be time consuming to get your ssh connections with proxies and multiplexing working well.  Here I've dumped
what I used from a Mac laptop to connect to my work system.  Hosts and routes have been changed.

It's mainly for my reference, but may be useful for others.

## Options

A longer example can be found at the end of this document, not all options will be detailed.

As always see the man page for full explanations or other uses/defaults.

### ProxyJump

If you need to connect to a host as more than one user, which doesn't match the ssh gateway user, you need to include the
user that authenticates at the ssh-gateway in the `ProxyJump` directive.

e.g.

* ssh-gateway user = bob
* internal-network users = bob,fred

```bash
# if
# Host work
#   ProxyJump bob@ssh.someplace.ac.uk
bob@home$ ssh work
... ssh auth ...
bob@work$
bob@home$ ssh fred@work
# uses bob to pass through ssh-gateway
```

### ServerAliveInterval

How frequently to check the server is still accessible:

* useful to ensure connections aren't dropped
* prevent connection being dropped due to inactivity

### ServerAliveCountMax

How many `ServerAliveInterval` messages without a response are acceptable before abandoning the connection.

### ControlMaster

Send data for the same user and same host down a single TCP connection (also see ControlPath).  Saves authenticating each
time you open another terminal for the same host+user... type less :)

## Full example

Includes comments that may point you to useful docs:

```ssh-config
Host *
  XAuthLocation /opt/X11/bin/xauth
  Compression yes
  ServerAliveInterval 60
  ServerAliveCountMax 2
  ForwardX11Timeout 100w
  Ciphers aes128-ctr
  # share 1 ssh connection for same host/port/user
  ControlMaster auto
  ControlPath ~/.ssh/ssh_mux_%h_%p_%r

Host proxies
  HostName somehost
  # do ssh gateway dance and drop me onto the host I really want
  ProxyJump ssh.someplace.ac.uk
  # Point your SOCKS proxy to localhost:8999 to pass all network through your
  # ssh connection
  #  - recommend setting bypass rules for zoom/webex etc
  DynamicForward 8999
  # Forwarding - good for databases
  LocalForward 25000 172.XX.XX.XXX:1521

# a machine on my home network with no DNS name:
Host my-nano
  HostName 192.168.0.90

# a host within company network, without DNS name:
Host unnamed-host
  HostName 172.27.22.23
  ProxyJump ssh.someplace.ac.uk

# a host within company network
Host named-host
  HostName somehost
  ProxyJump user@ssh.someplace.ac.uk
```

## Comments

<script src="https://utteranc.es/client.js"
        repo="keiranmraine/keiranmraine.github.io"
        issue-term="url"
        label="comments"
        theme="boxy-light"
        crossorigin="anonymous"
        async>
</script>
