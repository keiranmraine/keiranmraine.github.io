# Work history

## 2002-2007

I originally joined the Cancer Genome Project (CGP) at the Sanger Institute (now CASM) in 2002 on completion of my M.Sc
in Bioinformatics.  At that time I was responsible for developing an integrated Laboratory Information Management System
(LIMS) to support PCR heteroduplex analysis.  This involved database design, Perl-CGI web-development and integration of
[TECAN](http://www.tecan.com/) lab robots.  This system continues to be used largely unchanged for sample tracking in the
CASM laboratory.  During this time I also contributed to very early versions of the [COSMIC database](http://cancer.sanger.ac.uk/cosmic).

During 2004 CGP moved heavily into capillary sequencing (also known as [Sanger sequencing](https://en.wikipedia.org/wiki/Sanger_sequencing)).
Once the LIMS was adapted I moved on to developing a high throughput pipeline to run the [autoCSA](http://www.ncbi.nlm.nih.gov/pubmed/17485433)
analysis software.  The control software was written using JAVA, and a public desktop application, a.k.a. [StandaloneCSA](http://cancerit.github.io/AutoCSA/),
was created for external use and released early 2007.  This was a large project involving many developers working together
on various aspects including database design, the analysis pipeline itself and a web-application used for visual inspection
of the called variants by scientific staff.

## 2007-2009

In 2007 I left the CGP and joined [Roche Pharmaceuticals](http://www.roche.com/) as a Clinical Programmer.  Here I gained
experience of [good clinical practice](https://en.wikipedia.org/wiki/Good_clinical_practice) while building data capture
and cleaning tools using [Oracle Clinical](http://www.oracle.com/us/products/applications/health-sciences/e-clinical/clinical/index.html).

## 2009-Current

After 2 years at Roche I returned to the CGP in 2009.  Although this may seem an unusual career choice the advent of next
generation sequencing had significantly changed the challenges and work being undertaken.  One of the primary differences
in the data was the sheer volume being generated.

### Analysis pipelines

The initial project was to create a pipeline to run the mapping of [Illumina paired-end sequencing](https://www.illumina.com/technology/next-generation-sequencing/paired-end-sequencing_assay.html),
supporting multiple species and builds.

Over 6 months I extended an existing database, developed a new web-application and file tracking system to control the
scheduling and flow of data into and out of a [Platform LSF](https://en.wikipedia.org/wiki/Platform_LSF) compute farm.
After the initial 6 months the success of the project resulted in it being extended to support the downstream analysis
tools with more of the team moving in to aid in both support and development.  During this phase of the project the web-interfaces
were extended significantly to allow the scientific staff to manage their data and analysis.

The system proved to be a work-horse for the group for 6 years.  The core jobs submission mechanism has been reworked by
the group in the last few years, but the core database and much of the web-application has remained largely unchanged.

### Genome browsers

As part of the analysis pipeline work I brought [GBrowse](http://gmod.org/wiki/GBrowse) into the the group as a centrally
managed genome browser.  GBrowse relies on server side compute and a traditional database backend to provide the images.
In 2012 [JBrowse](http://jbrowse.org/) matured to a state where BAM data could be directly handled in the browser.  Due
to this, and no further development on GBrowse, we have been actively working with the GMOD community to ensure features
of GBrowse that our scientific staff consider important are replicated.  We formally retired our GBrowse instance a few
years ago.

During 2016 I developed a plugin for JBrowse, [proportionalMultiBw](https://github.com/cancerit/proportionalmultibw/blob/master/README.md)
(prototyped in my own time) to aid in the visualization of allele fraction in regions of very high sequencing depth.  I've
additionally produced a general purpose tool for automating generation of screen shots, see [cgpJBrowseToolkit](https://github.com/cancerit/cgpJBrowseToolkit/blob/master/README.md).
The new JBrowse 2 embraces this screenshot feature making this a core component of this new version of the tool (not based
on my code).

### Global projects

In 2014 the CGP became involved in the [ICGC PanCancer Analysis of Whole Genomes][pcawg-url] project.
As part of this a significant portion of the IT team spent 6 months preparing all of the core algorithms we use in house
for public use.  In addition to this work I was a member of the technical working group advising on tools, mapping strategy
and creating tools to aid the submission of the raw sequencing data from the sequencing sites around the world.  Working
closely with the IT group at OICR I implemented the 'Sanger' pipeline into the framework to be used in multiple data centers
around the world.  This pipeline ran successfully in 13 locations on a variety of base infrastructures including AWS, Azure,
OpenStack and traditional HPC.

Following on from this project I continue to advise in the [ICGC-ARGO][argo-url] data management group and the [PPCG][ppcg-url]
technical working group.

### Containers for reproducible science

In 2016 I developed [cgpbox](https://github.com/cancerit/cgpbox) as an initial prototype providing our wholegenome analysis
platform in a convenient to use docker image.  This was well received and we continue to build on this with the [dockstore](https://dockstore.org)
framework (see above).  Variations on "cgpbox" have been used to drive the PPCG project analysis and are in use by ICGC-ARGO
at [GDC][gdc-url]

Following on from this I have lead the initiative to convert all of our analysis pipelines to use containers.  This has
allowed us to offer our users the ability to fix algorithm versions for the life of their analysis projects.

### Full stack development experience

During 2017 I prototyped a full-stack system for receipt of external sequencing data via web-interface and S3, backed by
web-services hosted in our OpenStack flexible compute farm.  Some of this can be viewed [here](https://youtu.be/I2Burmz7nPA).
Following on from this a small team was formed to take this project further, developing the service architecture to validate
the input data.  Sadly the decision was taken to pause this project, however a great deal of new technology was investigated
and this has proven to be valuable for subsequent projects.

## Readers note

Above I have detailed projects that I have been heavily involved in.  Although I may have worked exclusively on some of
these it should be noted that I value the advice and expertise of those around me.  The 'cancerit' team is an excellent
group of people from varied backgrounds who draw on each others strengths.  The team is also supported by the core informatics
and infrastructure groups at the Sanger Institute.

<!-- references -->

[argo-url]: https://www.icgc-argo.org/
[gdc-url]: https://gdc.cancer.gov/
[pcawg-url]: https://dcc.icgc.org/pcawg
[ppcg-url]: https://panprostate.org/
