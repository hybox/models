
## Agents

### Introduction

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

* foaf:Organization
  * rdfs:label

* foaf:Group
  * rdfs:label (MUST, unless there's foaf:name supplied)
  * foaf:name (SHOULD)
  * foaf:member (MAY)

### Usage

#### Defining New Agents

#### References to Agents

* dcterms:creator
* dcterms:contributor
* dcterms:publisher
* dcterms:rightsHolder
* MARC Relators: http://id.loc.gov/vocabulary/relators.html



