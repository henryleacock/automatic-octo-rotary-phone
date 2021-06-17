- lite version
    - point proxy at dev (unoptimized)
        - start static server within sitecore repo

    - file listener for files to be saved
    - optimization
    - file mover (into a directory that could be served up to the proxy site)







- remote proxy server
    - specify a request header to avoid bot manager
        - authentication possibly
    - explore netlify upload api
    

- switch environments
- switch sites
- switch optimized local files
    - either optimize the file or don't
    - this has to do with pulling files from the sitecore repo
- switchers would be great with the prompt library

- build a builder
    - a developer is able to edit files in the sitecore repo and see their changes on the proxy site

- deploy remotely

- refactor express to include static files to consolidate servers