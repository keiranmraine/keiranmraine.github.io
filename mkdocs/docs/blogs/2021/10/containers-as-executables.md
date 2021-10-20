# Exposing singularity images as executables

It can be difficult to expose some tools where they have extensive dependencies without polluting your environment.
Environment modules can be used to handle this, but the interdependencies can be complex.

In pipelines you need to ensure that versions of tools/algorithms are compatible and known to have been tested together
so it is common to use containers to ensure the tested "unit" is the one that is in use.

Unfortunately many environments don't allow you to use docker, but many will allow the use of singularity containers as
they don't have the root escalation issues of plain docker.

## Get a singularity image

Most tools with have a versioned docker image, singularity can pull this and convert it to a container that can be safely
used without fear of root escalation:

```bash
$ singularity pull docker://quay.io/wtsicgp/pcap-core:5.7.0
INFO:    Converting OCI blobs to SIF format
INFO:    Starting build...
Getting image source signatures
...
INFO:    Creating SIF file...
$ ls -lh *.sif
-rwxrwx--- 1 kr2 ubuntu 157M Oct 18 15:20 pcap-core_5.7.0.sif
```

I'll leave you to decide the best place for your images, in this example images are copied into:

```none
    /software/singularity-images/${program}/${program}_${version}.sif
e.g.
    /software/singularity-images/pcap-core/pcap-core_5.7.0.sif
```

## Make the singularity image available via environment modules

We need a convenient way to set up environment variables which can point to this image and simplify use for users.
Modulefiles can provide this with a little lateral thinking and a few "shim" scripts.

This blog will not cover the intricacies of Environment Modules, see the [official docs](https://modules.readthedocs.io/en/latest/).

Here we setup a basic module file to make some variables available, keeping the elements you need to change at the very
start of the file.

File: `/software/modules/modulefiles/pcap-core/5.7.0`

```modulefile
#%Module
set version 5.7.0
set program pcap-core
set imagepath /software/singularity-images/$program/${program}_${version}.sif
set moduleinfo "Exposes $program tools via singularity, lustre, nfs and home accessible"
set home $env(HOME)
set sing_base "--cleanenv --home ${home}:${home} --bind ${home}:${home} ${imagepath}"
module-whatis "$moduleinfo"
module load singularity
set-alias "${program}-shell" "singularity shell $sing_base"
set-alias "${program}-exec" "singularity exec $sing_base"
prepend-path PATH /software/modules/installs/$program/shim-bin
setenv SING_PREFIX_PCAPCORE "singularity exec $sing_base"
```

The main items of note in the above script are:

| line | description                                | intent                                            |
|------|--------------------------------------------|---------------------------------------------------|
| 2    | Version of container                       | Single place to modify                            |
| 3    | Name of container                          | Single place to modify                            |
| 7    | Bulk of singularity options                | Ease of reading later commands                    |
| 9    | Load default singularity module            | assumes you have this available                   |
| 10   | Singularity shell alias for this container | Convenience for interactive/debug use             |
| 11   | Singularity exec alias for this container  | Convenience for interactive/debug use             |
| 12   | Add "virtual" script location to path      | See "shim scripts", allows tab complete/discovery |
| 13   | Container specific variable                | See "shim scripts"                                |

Assuming `/software/modules/modulefiles` is in `$MODULEPATH`:

```bash
$ which bwa_mem.pl
# not found
$ module load pcap-core/5.7.0
$ pcap-core-shell
Singularity> which bwa_mem.pl
/opt/wtsi-cgp/bin/bwa_mem.pl
Singularity> exit
$ which bwa_mem.pl
# not found
```

This is a good start, but it's not the same as just calling a script.

Lets talk about shim-scripts.

## shim scripts

A shim script is a very minimal script that can hide the complexity of calling the singularity command and behave as though
the real script is available.

Here we'll create a shim-script for the `bwa_mem.pl` script within the pcap-core container:

File: `/software/modules/installs/pcap-core/shim-bin/bwa_mem.pl`

```bash
#!/usr/bin/env bash
exec $SING_PREFIX_PCAPCORE $(basename $0) "$@"
```

Note that the `$SING_PREFIX_PCAPCORE` variable from the modulefile is referenced.

Now you can simply call (or tab-complete) `bwa_mem.pl` from the command line provided you have loaded the module:

```bash
$ module load pcap-core/5.7.0
$ bwa_mem.pl -h
Usage:
    bwa_mem.pl [options] [file(s)...]
...
```

For each command you want to expose to the user create a shim-script.

Note: you shouldn't expose all the tools in the container, just the unique items the container was built for.

## Comments

<script src="https://utteranc.es/client.js"
        repo="keiranmraine/keiranmraine.github.io"
        issue-term="url"
        label="comments"
        theme="boxy-light"
        crossorigin="anonymous"
        async>
</script>
