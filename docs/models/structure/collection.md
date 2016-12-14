
## Digital Object Structure

### Introduction

### Model

* pcdm:Collection
  * rdfs:label
  * pcdm:hasMember --> Collection, Object
  * pcdm:hasRelatedObject --> Object
  * pcdmw:hasFileSet --> FileSet
  * edm:isRepresentationOf --> dpla:SourceResource

Note that with the use of FileSets, collections SHOULD NOT also have Files.

### Defining Objects


