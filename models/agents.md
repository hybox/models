
## Agents

### Introduction

All listed classes are subclasses of `foaf:Agent`. 

### Model

* foaf:Person
 * rdfs:label (MUST, unless there's foaf:name supplied)
 * foaf:name (SHOULD) 
 * foaf:familyName (MAY)
 * foaf:givenName (MAY)
 * schema:additionalName (MAY)
 * schema:honorificPrefix (MAY)
 * schema:honorificSuffix (MAY)

 * foaf:gender (MAY)
 * schema:birthDate (MAY)
 * schema:birthPlace (MAY)
 * schema:deathDate (MAY)
 * schema:deathPlace (MAY)
 * schema:nationality (MAY)

 * foaf:mbox (MAY)
 * foaf:homepage (MAY)
 * foaf:knows (MAY)
 * schema:affiliation (MAY)
 * foaf:account (MAY; see [permissions](permissions.md))
 * org:memberOf (MAY; see [permissions](permissions.md) and [#30](https://github.com/hybox/models/issues/30))

* foaf:Organization
  * rdfs:label( MUST, unless there's foaf:name supplied)
  * foaf:name (SHOULD)

* foaf:Group
  * rdfs:label (MUST, unless there's foaf:name supplied)
  * foaf:name (SHOULD)
  * foaf:member (MAY; see [permissions](permissions.md))

### Usage

#### Defining New Agents

#### References to Agents

* dcterms:creator
* dcterms:contributor
* dcterms:publisher
* dcterms:rightsHolder
* MARC Relators: http://id.loc.gov/vocabulary/relators.html



