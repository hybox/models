# The Hyku Data Model

The Hyku Data Model serves as the core domain for [Hyku](https://github.com/projecthydra-labs/hyku), the repository application developed by the [Hydra in a Box](http://hydrainabox.projecthydra.org/) project using the [Hydra](http://projecthydra.org/) framework. The aims of the modeling work underway by the Hydra in a Box project is to provide a single coherent model in which a core set of primary content types can be described. The design of the models follows several [design principles](notes/design_principles.md) in an effort to be consistent and practical.

## Structure of this documentation

This documentation is organized in three main sections:

* [Implementation Notes](notes/README.md), which include design principles and documentation regarding the use of this model
* [Models](models/README.md), which identify the set of core types of entities that are managed or referenced by an instance of the Hyku application
* [Use Cases](usecases/README.md), which describe an application of the Hyku data model to specific kinds of content.

## Audience

The core audience for this documentation is twofold:

* Developers, especially those wanting to work with Hyku or other Hydra-based repositiories.
* Individuals wanting to learn more about data modeling, and more specifically, the design implementation of data models based on the [Portland Common Data Model]((https://github.com/duraspace/pcdm/wiki).

## Scope

The scope of the data modeling activity, and by extension this documentation, includes:

* Data modeling: both the structures and usage of the actual content.
* Metadata modeling to address core requirements for the application, including:
    * Descriptive metadata
    * Administrative metadata
    * Rights metadata
    * Technical metadata
* Linked Data modeling of technical requirements
    * Ontology selection and development where no existing ontology suffices
    * JSON-LD context and frame specification
* Protocol requirements regarding Linked Data, including:
    * ACL/permissions definition
    * Projection of the model into a structure easily managed in an implementation of the Linked Data Platform (LDP) specification

The following are specifically _out of scope_ for this documentation:

* APIs
* Implementation pattern requirements

## Relationship to other data models

By design, the Hyku Data Model does not stand alone. This model reuses existing ontologies whenever possible. This includes, but is not limited, to the following:

* [RDF 1.1](https://www.w3.org/TR/rdf11-concepts/)
* The [Portland Common Data Model](https://github.com/duraspace/pcdm/wiki)
* The [Europeana Data Model](http://pro.europeana.eu/page/edm-documentation) and the [DPLA Metadata Application Profile](https://dp.la/about/map)

More detailed information on the relationship to other models can be found in the [Implementation Notes](notes/README.md). A list of ontologies and vocabularies whose entities are incorporated into this model can be found in the [introduction to the Models](models/README.md).
