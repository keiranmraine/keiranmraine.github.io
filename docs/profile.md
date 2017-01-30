# Profile

### In short
Husband, father, bioinformatician.

### Current position
Principal Bioinformatician, [Cancer Ageing and Somatic Mutation](http://www.sanger.ac.uk/science/programmes/cancer-genetics-and-genomics) (CASM), [The Wellcome Trust Sanger Institute](http://www.sanger.ac.uk/).

Currently much of my development time is spent improving the usability of the teams
code outside of the institute.  This involves:

* Supporting queries on our [GitHub repository](https://github.com/cancerit)
* Building docker images modeling our analysis pipelines
    * [dockstore-cgpmap](https://github.com/cancerit/dockstore-cgpmap) - BWA mapping workflow
    * [dockstore-cgpwxs](https://github.com/cancerit/dockstore-cgpwxs) - WXS variant calling (SNV, INDEL)
    * [dockstore-cgpwgs](https://github.com/cancerit/dockstore-cgpwgs) - WGS variant calling (SNV, INDEL, CN, SV)
* Incorporating these into the [dockstore.org](http://dockstore.org) framework:
    * [dockstore-cgpmap](https://dockstore.org/containers/quay.io/wtsicgp/dockstore-cgpmap)
    * [dockstore-cgpwxs](https://dockstore.org/containers/quay.io/wtsicgp/dockstore-cgpwxs)
    * [dockstore-cgpwgs](https://dockstore.org/containers/quay.io/wtsicgp/dockstore-cgpwgs)

### Global Projects

I am a member of the following initiatives:
* [ICGC PanCancer Analysis of Whole Genomes](https://dcc.icgc.org/pcawg) Technical working group
* [ICGCmed](https://icgcmed.org/) Data Management Working group
    * Data Coordination
    * Software Engineering

### Work history

I originally joined the Cancer Genome Project (CGP) at the Sanger Institute (now CASM) in 2002 on completion of my M.Sc in Bioinformatics.  At that time I was responsible for developing an integrated Laboratory Information Management System (LIMS) to support PCR heteroduplex analysis.  This involved database design, Perl-CGI web-development and integration of [TECAN](http://www.tecan.com/) lab robots.  This system continues to be used
largely unchanged for sample tracking in the CASM laboratory.  During this time I also contributed to very early versions of the [COSMIC database](http://cancer.sanger.ac.uk/cosmic).

During 2004 CGP moved heavily into capillary sequencing (also known as [Sanger sequencing](https://en.wikipedia.org/wiki/Sanger_sequencing)).  Once the LIMS has been adapted
I moved on to developing a high throughput pipeline to run the [autoCSA](http://www.ncbi.nlm.nih.gov/pubmed/17485433) analysis software.  The control software was written using JAVA, and a public desktop application, a.k.a. [StandaloneCSA](http://cancerit.github.io/AutoCSA/), was created for the external use and release early 2007.  This was a large project involving many developers working together on various aspects including database design, the analysis pipeline itself and a web-application used for visual inspection of the called variants by scientific staff.

In 2007 I left the CGP and joined [Roche Pharmaceuticals](http://www.roche.com/) as a Clinical Programmer.  Here I gained experience of [good clinical practice](https://en.wikipedia.org/wiki/Good_clinical_practice) while building data capture and cleaning tools using [Oracle Clinical](http://www.oracle.com/us/products/applications/health-sciences/e-clinical/clinical/index.html).

After 2 years at Roche I returned to the CGP in 2009.  Although this may seem an unusual career choice the advent of next generation sequencing had significantly changed the challenges and work being undertaken.  One of the primary differences in the data was the sheer volume being generated.  The initial project was to create a pipeline to run the mapping of [Illumina paired-end sequencing](https://www.illumina.com/technology/next-generation-sequencing/paired-end-sequencing_assay.html), supporting multiple species and builds.

Over 6 months I extended an existing database, developed a new web-application and file tracking system to control the scheduling and flow of data into and out of a [Platform LSF](https://en.wikipedia.org/wiki/Platform_LSF) compute farm.  After the initial 6 months the success of the project resulted in it being extended to support the downstream analysis tools with more of the team moving in to aid in both support and development.  During this phase of the project the web-interfaces were extended significantly to allow the scientific staff to manage their data and analysis.

The system proved to be a work-horse for the group, core structure largely unchanged, for 6 years.  The core jobs submission mechanism has been reworked by the group in the last few years, but the core database and much of the web-application has remained largely unchanged.

As part of the analysis pipeline work I brought [GBrowse](http://gmod.org/wiki/GBrowse) into the the group as a centrally managed genome browser.  GBrowse relies on server side compute and a traditional database backend to provide the images. In 2012 [JBrowse](http://jbrowse.org/) matured to a state where BAM data could be directly handled in the browser.  Due to this, and no further development on GBrowse, we have been actively working with the GMOD community to ensure features of GBrowse that our scientific staff consider important are replicated.

During 2016 I developed a new plugin for JBrowse, [proportionalMultiBw](https://github.com/cancerit/proportionalmultibw/blob/master/README.md) (prototyped in my own time) to aid in the visualisation of allele fraction in regions of very high sequencing depth.  I've additionally produced a general purpose tool for automating generation of screen shots, see [cgpJBrowseToolkit](https://github.com/cancerit/cgpJBrowseToolkit/blob/master/README.md).

In 2014 the CGP became involved in the [ICGC PanCancer Analysis of Whole Genomes](https://dcc.icgc.org/pcawg) project.  As part of this a significant portion of the IT team spent 6 months preparing all of the core algorithms we use in house for public use.  In addition to this work I was a member of the technical working group advising on tools, mapping strategy and creating tools to aid the submission of the raw sequencing data from the sequencing sites around the world.  Working closely with the IT group at OICR I implemented the 'Sanger' pipeline into the framework to be used in multiple data centers around the world.  This pipeline ran successfully in 13 locations on a variety of base infrastructures including AWS, Azure, OpenStack and traditional HPC.

### Readers note
Above I have detailed projects that I have been heavily involved in.  Although I may have worked exclusively on some of these it should be noted that I value the advice and expertise of those around me.  The 'cancerit' team is an excellent group of people from varied backgrounds who draw on each others strengths.  The team is also supported by the core informatics and infrastructure groups at the Sanger Institute.
