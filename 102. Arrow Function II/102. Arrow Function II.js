class Site {
    name = 'WEB'
    getHandle() {
      return {
        name: 'website',
        getName1() {
          return this.name
        },
        getName2: () => {
          return this.name
        },
        getName3: function() {
          return this.name
        }
      }
    }
  }
  
  const site = new Site()
  console.log(site.getHandle().getName1()) // website
  console.log(site.getHandle().getName2()) // WEB
  console.log(site.getHandle().getName3()) // website