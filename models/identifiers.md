## Identifiers

### Introduction

### Model

* Any Resource
 * bf:identifiedBy (MAY)

* bf:Identifier
 * rdf:type (MUST)
 * rdf:value (MUST)

* rdfs:Class
 * rdfs:subClassOf (MUST)
 * rdfs:label (SHOULD)
 * skos:note (SHOULD)



### Usage

#### Defining New Identifiers and Identifier Classes

```
<repo:/identifierTypes/FooLocalIdentifier> a rdfs:Class ;
  rdfs:subClassOf bf:Identifier ;
  skos:note "" ;
  rdfs:label "" .

<repo:/identifiers/id123> a <repo:/identifierTypes/FooLocalIdentifier> ;
  rdf:value "123" .
```

#### References to Identifiers

```
<repo:/descriptions/object1> a bf:Work ;
  bf:identifiedBy <repo:/identifiers/id123> .
```

### External Taxonomies

* LC's identifier classes
