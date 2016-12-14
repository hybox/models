
## Concepts

### Introduction

### Model

* skos:ConceptScheme  
  * rdfs:label (MUST)

* skos:Concept
  * skos:prefLabel (MUST)
  * skos:definition (SHOULD)
  * skos:altLabel (MAY)
  * skos:inScheme (MAY)
  * skos:note (MAY)
  * skos:broader (MAY)
  * skos:narrower (MAY)
  * skos:closeMatch (MAY)
  * skos:exactMatch (MAY)


### Usage

#### Defining New Concepts
```
<repo:/concepts/scifi> a skos:Concept ;
  skos:inScheme <repo:/schemes/genres> ;
  skos:prefLabel "Sci-Fi"@en ;
  skos:definition "Science Fiction" ;
  skos:note "Created 2016/07/20 to have a more friendly prefLabel" ;
  skos:exactMatch <http://id.loc.gov/authorities/genreForms/gf2014026529> .

<repo:/schemes/genres> a skos:ConceptScheme ;
  rdfs:label "Local Genre classifications" .
```

#### References to Concepts

Concepts can be referenced in the following ways:

 * bf:classification for a classification of the resource (e.g. some LCCN)
 * dcterms:subject for the subject or topic of the resource (e.g. Star Wars)
 * edm:hasType for the genre of the resource (e.g. SciFi)
 * dcterms:medium for the carrier type of the resource (e.g. DVD)

```
<repo:/descriptions/object1> a bf:Work ;
  bf:classification <repo:/concepts/subject1> ;
  dcterms:subject <repo:/concepts/subject2> ;
  edm:hasType <repo:/concepts/genre1> ;
  dcterms:medium <repo:/concepts/carrier1> .
```

### External Taxonomies

The use of external taxonomies (concept schemes) is encouraged.  Several appropriate SKOS concept schemes can be found via the following URLs:

* http://id.loc.gov/
* http://www.getty.edu/research/tools/vocabularies/index.html
* https://www.w3.org/2001/sw/wiki/SKOS/Datasets

