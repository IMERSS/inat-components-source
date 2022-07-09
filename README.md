# inat-components-source

This node repo contains the boilerplate needed to generate the data source files for 
[@imerss/inat-components](https://github.com/IMERSS/inat-components). Give that repo a look over to find out more, but 
in quick summary: in order to display iNaturalist data on your own site, you can't just ping their APIs. They put limits
on the.

This repo illustration how you can use the `@imerss/inat-components-utils` package to generate the source files yourself.

### How to use

- Check out the repo. 
- Edit the example `inat.config.json` file to customize what data you want to generate cache files. See the section
below on how to edit that file. 
- Run `npm install`
- Run `node generate.js`

> At this point it will chug through and generate cache files one by one, depending on whatever settings you supplied. 


### The `inat.config.json` file

TODO.

