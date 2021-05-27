new Vue(
  {
    el: '#app',
    data: {

      socialIcons: [

        {
          icon: 'fa-facebook-f',
          href: '#'
        },
        {
          icon: 'fa-instagram',
          href: '#'
        },
        {
          icon: 'fa-twitter',
          href: '#'
        },
        {
          icon: 'fa-youtube',
          href: '#'
        }

      ],
      
      navLinks: [

        {
          text: 'Home',
          href: '#'
        },
        {
          text: 'Recipes',
          href: '#'
        },
        {
          text: 'Places',
          href: '#'
        },
        {
          text: 'Blog',
          href: '#'
        },
        {
          text: 'About',
          href: '#'
        },
        {
          text: 'Contact',
          href: '#'
        },
        {
          //Search
          text: '',
          href: '',
          icon: 'fa-search'
        }

      ],

      footerLinks: [

        {
          text: 'Recipes',
          href: '#'
        },
        {
          text: 'Places',
          href: '#'
        },
        {
          text: 'Blog',
          href: '#'
        },
        {
          text: 'About',
          href: '#'
        },
        {
          text: 'Contact',
          href: '#'
        }      

      ],

      email: '',
      display: 'dspl-none'

    },
    methods: {
      subscribe() {
        if (this.email === '') {
          return;
        }

        this.display = 'dspl-blk';

        this.email = '';
      }
    }
  }
);