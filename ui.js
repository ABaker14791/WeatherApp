class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
      this.defaultCity = "London";
    }

    populateUI(data) {

      const iconCode = data.weather[0].icon;
      const iconSrc = `http://openweathermap.org/img/wn/${iconCode}.png`;

      //de-structure vars
  
      //add them to inner HTML

      this.uiContainer.innerHTML = `
          
          <div class="card mx-auto mt-5" style="width: 30rem;">
              <div class="card-body justify-content-center">
                  <h4 class="card-title">${data.name}</h5>
                  <h5 class="card-subtitle mb-2 text-muted">${Math.round(data.main.temp)}°C.</h6>
                  <h6 class="card-subtitle mb-2 text-muted">Highs of ${Math.round(data.main.temp_max)}°C. Lows of ${Math.round(data.main.temp_min)}°C</h6>
                  <p class="card-text">Weather conditions are described as: ${data.weather[0].description}</p>
                  <img style="width: 5rem; display: block; margin-left: auto; margin-right: auto;" src="${iconSrc}"></img>
              </div>
          </div>
          
          `;
    }
  
    clearUI() {
      uiContainer.innerHTML = "";
    }
  
    saveToLS(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    getFromLS() {
      if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
  
      return this.city;
    }
  
    clearLS() {
      localStorage.clear();
    }


  }

