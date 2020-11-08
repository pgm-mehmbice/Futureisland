(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.buildUI();
      this.setEventListeners();
    },

    cacheElements() {
      console.log("2. Chache all exisiting DOM elements!");
      this.$logo = document.querySelector('.logo')
      this.$listbar = document.querySelector('.listbar');
      this.$artists = document.querySelector('.artists');
      this.$artistSidebar = document.querySelector('.artistSidebar');
      this.$timer = document.querySelector('.timer');
      this.$mediabar = document.querySelector('.mediabar');
      this.$info = document.querySelector('.info');
      this.$knowMore = document.querySelector('.knowMore');
      this.$newsLetter = document.querySelector('.newsLetter');
    },

    buildUI() {
      console.log("3. Build the user interface!");
      this.$logo.innerHTML = this.createHTMLForlogo();
      this.$listbar.innerHTML = this.createHTMLForListbar();
      this.$artists.innerHTML = this.createHTMLForArtists();
      this.$timer.innerHTML = this.createDigitalClock();
      this.$mediabar.innerHTML = this.createHTMLForMediabar();
      this.$info.innerHTML = this.createHTMLForInfo();
      this.$knowMore.innerHTML = this.createHTMLForKnowMore();
      this.$newsLetter.innerHTML = this.createHTMLForNewsLetter();
    },
    

    createHTMLForlogo() {
      console.log("creating HTML For logo");
      let tempStr = '';

      logo.forEach((lo, index) => {
        tempStr += `
        <li class="listlogo">${lo}</li>`
      });

      return tempStr;
    },
 
    createHTMLForListbar() {
      console.log("creating HTML For Listbar");
      let tempStr = '';

      listbar.forEach((nav, index) => {
        tempStr += ` 
        <li class="list"> <a href="${nav.link}">${nav.name}</a></li>`
      });

      return tempStr;
    },

    createHTMLForArtists() {  
      console.log("creating HTML For Artists");
      let tempStr = '';

      artists.forEach((art, index) => {
        const daysToMill = new Date(art.from);
        const days = daysToMill.getDay();
        
          switch (days) {
          case 0: day = "zondag"; break;
          case 1: day = "maandag"; break;
          case 2: day = "dinesdag"; break;
          case 3: day = "woensdag "; break;
          case 4: day = "donderdag"; break;
          case 5: day = "vrijdag"; break;
          case 6: day = "zaterdag"; break;
        }
        tempStr += `
        <div class="artist" data-id="${art.id}" style="background-image: url(${art.artist.picture.small})">
        <div class="dayPlaceArtist">
        <h4 class"from">${day}</h4>
        <h3 class"place">${art.place.name}</h3></div>
        <h2 class"name">${art.artist.name}</h2>
        </div>`
      });

      return tempStr;
    },

     createdAtAndModifiedAt() {
      console.log("created At And Modified At");
    
      const createdAt = new Date(art.createdAt);
      const modifiedAt = new Date(art.modifiedAt);

      return `
      Created at: ${createdAt}
      Modified at: ${modifiedAt}`
    },

    createDigitalClock () {
      console.log("creating Digital Clock");

      let countDownDate = new Date(1625148000000).getTime();

      let x = setInterval(function() {
    
      let now = new Date().getTime();
    
      let distance = countDownDate - now;
    
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      if ((days+"").length === 2){days = "0" +days}

      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if ((hours+"").length === 1){hours = "0" +hours}

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      if ((minutes+"").length === 1){minutes = "0" +hours}

      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if ((seconds+"").length === 1){seconds = "0" +seconds}

      document.querySelector(".timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      if (distance < 0) {
        clearInterval(x);
        document.querySelector(".timer").innerHTML = "EXPIRED";
      }
    }, 1000);
    },

    createHTMLForMediabar() {  
      console.log("creating HTML For Mediabar");

      let tempStr = '';
      tempStr += `<ul class="mediabar1">`
      mediabar.forEach((mediab, index) => {
        tempStr += `
        <li><a href="${mediab.link}" target="_blank" class="${mediab.type}"></a></li>`
      });
        `</ul>`
      return tempStr;
    },

    createHTMLForInfo() {
      console.log("creating HTML For Info");

      let tempStr = '';
        tempStr += `<p class="infoTextTitle">info</p>`
      info.forEach((inf, index) => {
        tempStr += `<li class="text1"><a href="${inf.link}">${inf.text1}</li>`
      });

      return tempStr;
    },

    createHTMLForKnowMore() {  
      console.log("creating HTML For KnowMore");

      let tempStr = '';
        tempStr +=  `<p class="knowMoreTextTitle">know more?</p>`
      knowMore.forEach((km, index) => {
        tempStr += `<li class="text1"><a href="${km.link}">${km.text1}</li>`
      });

      return tempStr;
    },

    createHTMLForNewsLetter() {
      console.log("creating HTML For NewsLetter");

      let tempStr = '';
        tempStr += `<p class="newsLetterTextTitle">newsletter</p>`
      newsLetter.forEach((nl, index) => {
        tempStr += `<ul class="newsLetterText">${nl.text}</ul>`
        tempStr += `<input type="text" placeholder="Email" name="email">`
        tempStr += `<button type=""><i class="fa fa-subscribe">SUBSCRIBE</i></button>`
      });

      return tempStr;
    },

    setEventListeners() {
      console.log("set Event Listeners");
      let $artists = document.querySelectorAll('.artist');
      $artists.forEach((ad) => {
        ad.addEventListener('click', (evt) => {
          let id = evt.target.dataset.id || evt.target.parentNode.dataset.id
          this.generateHTMLForDetails(id);

        })
      })
    },

    generateHTMLForDetails(id) {
      console.log("generating HTML For Details");
      const artistData = artists.find((a) => a.id === id);

      this.$artistSidebar.innerHTML = `
      <button type="button" class="exitButton" aria-label="Close (Press escape to close)"><span>X</span></button>

      <div class=artistDetailBackground>
      <div class="showArtistDetails">

      <h4 class"from">${artistData.artist.dag}</h4>
      <h3 class"place">${artistData.place.name}</h3>
      <h2>${artistData.artist.name}</h2>
      <img src="${artistData.artist.picture.small}">

      <p>${artistData.artist.synopsis}</p>

      <iframe width="802" height="502" src="${artistData.artist.media[0].sourceld}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
      <ul>
        <p>Know more</p>
        <li><a href=${artistData.artist.social.website} target="_blank">${artistData.artist.social.website}</a></li>
        <li><a href=${artistData.artist.social.facebook} target="_blank">${artistData.artist.social.facebook}</a></li>
        <li><a href=${artistData.artist.social.twitter} target="_blank">${artistData.artist.social.twitter}</a></li>
        <li><a href=${artistData.artist.social.instagram} target="_blank">${artistData.artist.social.instagram}</a></li>
      </ul>
      </div>`;

      const $exitDetailButton = document.querySelector('.exitButton')
      $exitDetailButton.addEventListener('click', (event) => {
        this.$artistSidebar.innerHTML = '';
      })
    },
    
  };
  app.initialize();
})();
