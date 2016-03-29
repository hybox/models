
# HyBox Models

## Aims and Scope

The aims of the HyBox modeling work is to provide a single coherent model in which the primary content types can be described. The design of the models follows several [design principles][principles] in an effort to be consistent and practical.  

The scope of the work is guided by the content types and is intended to be incremental in approach.  The first content types are intentionally different to ensure a reasonable baseline, and then as they are further refined, so too the model will be refined.  When subsequent content types are added, this will then provide an opportunity to assess the model holistically.  The models will include both repository object descriptions (technical, structural, administrative and rights metadata) as well as descriptions of the real world objects that they are surrogates for (descriptive metadata).  The separation is also intentional, and it is hoped will allow for future replacement of the descriptive metadata with other more appropriate or more domain specific metadata schemes.

## Overview

* The structure of the content is divided into Collections and Objects.  These can be nested to create hierarchies.
* A FileSet is used to maintain a grouping of original binary content, and its derivatives such as a master TIFF image, the JPG access copy, and the PNG thumbnail.
* Files are the actual bitstreams, and can be described by Technical Metadata.
* Permissions are handled via Web ACLs, which refer to an Agent (such as a Person) and grant authoritizations over actions that person can take.  ACLs can be associated with any resource, including both the structural linked data and the binary content Files.
* Real World Objects, such as the physical book that the scanned repository object represents, are separate from the repository object structure.  HyBox provides a minimal set of descriptive fields and relationships.
* Concepts, Agents, Places, and Identifiers are treated as the most important descriptive resources to share between descriptions.

The following diagram lays out the basic structure of the HyBox model:

![Overview Diagram](images/high_level.png)

## Specific Models

* [Object Structure][structure] (the structure of managed resources)
  * Collection
  * Object
  * FileSet
  * Content
  * Technical
* [Real World Objects][rwo] (links from managed resources to descriptions of real world objects)
* [Agents][agents] (identity and descriptions of people, organizations and software agents)
* [Permissions][permissions] (the interaction between managed resources and agents' actions)
* [Identifiers][identifiers] (the description of legacy, non-URI identifiers)
* [Places][places] (the description of places)
* [Concepts][concepts] (the description of genres, subjects, topics, forms, and other "authorities")


[principles]: /notes/design_principles.md
[structure]: structure.md
[rwo]: rwo.md
[agents]: agents.md
[permissions]: permissions.md
[identifiers]: identifiers.md
[places]: places.md
[concepts]: concepts.md




