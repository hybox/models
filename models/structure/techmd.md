
## Digital Object Structure

### Introduction

### Model

* pcdm:Collection
  * pcdm:hasMember --> Collection, Work, Object
  * pcdm:hasRelatedObject --> Work, Object
  
* pcdmw:Work
  * pcdm:hasMember --> Object, Work, FileSet
  * pcdm:hasRelatedObject --> Work, Object

* pcdm:Object
  * pcdm:hasMember --> Object, FileSet
  * pcdm:hasRelatedObject --> Work, Object

* pcdmw:FileSet
  * pcdm:hasFile --> File

* pcdm:File

### Defining Objects


