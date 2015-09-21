
## Relationship between DPLA MAP and PCDM

This document notes the ways in which the DPLA Metadata Application Profile and PCDM can be used together.

### Mapping from PCDM to DPLA MAP

#### Collections

One or more pcdm:Collections map to a dcmitypes:Collection. As pcdm:Collections may be hierarchical, and DPLA's use of dcmitypes:Collection is not hierarchical, information may be accumulated from multiple pcdm:Collections into one.  

For example, given:

```
_:maps a pcdm:Collection ;
  rdfs:label "Maps Collection" ;
  dc:description " ... " ;
  pcdm:hasMember _:africa .

_:africa a pcdm:Collection ;
  rdfs:label "Maps of Africa" ;
  pcdm:hasMember _:map1, _:map2, ... _:mapn .
```

The resulting dcmitype Collection may take the description from the top level Maps collection, the label from the Maps of Africa collection, and apply it to all of the Map objects.

#### Objects

PCDM Objects can be used to describe objects (both conceptual and physical), and parts of those objects.  DPLA is mostly concerned with Real World Objects (dpla:SourceResource) and the digital views of that object (dpla:WebResource).

When mapping from PCDM to DPLA, a pcdm:Object that is not pcdm:hasMember another pcdm:Object will be treated as a dpla:SourceResource.  Other resources may also be treated in this way.  These Objects may or may not be part of a pcdm:Collection.

Such objects MUST have a stable web URL at which the object is rendered in a human readable way.  This is the object of dpla:shownAt.  Such objects SHOULD have a preview WebResource, such as a thumbnail. 

#### Files

Some pcdm:Files are dpla:WebResources, but not all.  It would be true in at least the following situations:

* The File is a view of the SourceResource (shownAt)
* The File is a preview / thumbnail of the SourceResource (preview)



