 
                    function animateValue(id, start, end, duration) {
                      var obj = document.getElementById(id);
                      var range = end - start;
                      var minTimer = 50;
                      var stepTime = Math.abs(Math.floor(duration / range));
                  
                      stepTime = Math.max(stepTime, minTimer);
                  
                      var startTime = new Date().getTime();
                      var endTime = startTime + duration;
                      var timer;
                  
                      function run() {
                        var now = new Date().getTime();
                        var remaining = Math.max((endTime - now) / duration, 0);
                        var value = Math.round(end - remaining * range);
                        obj.innerHTML = value.toLocaleString();
                  
                        if (value == end) {
                          clearInterval(timer);
                        }
                      }
                  
                      timer = setInterval(run, stepTime);
                      run();
                    }
                  
                    animateValue("counter1", 1, 5, 1000); 
                    animateValue("counter2", 1, 3, 1000); 
                    animateValue("counter3", 1, 90, 1000); 

                    // function opentab(evt, cityName) {
                    //   var i, tabcontent, tablinks;
                    //   tabcontent = document.getElementsByClassName("tabcontent");
                    //   for (i = 0; i < tabcontent.length; i++) {
                    //     tabcontent[i].style.display = "none";
                    //   }
                    //   tablinks = document.getElementsByClassName("tablinks");
                    //   for (i = 0; i < tablinks.length; i++) {
                    //     tablinks[i].className = tablinks[i].className.replace("active", "");
                    //   }
                    //   document.getElementById(cityName).style.display = "block";
                    //   evt.currentTarget.className += " active";
                    // }
                    function openCity(evt, cityName) {
                      var i, tabcontent, tablinks;
                      tabcontent = document.getElementsByClassName("tabcontent");
                      for (i = 0; i < tabcontent.length; i++) {
                        tabcontent[i].style.display = "block";
                      }
                      tablinks = document.getElementsByClassName("tablinks");
                      for (i = 0; i < tablinks.length; i++) {
                        tablinks[i].className = tablinks[i].className.replace(" active", "");
                      }
                      document.getElementById(cityName).style.display = "block";
                      evt.currentTarget.className += " active";
                    }

                    function openCity1(evt, tabname) {
                      var i, tabcontent1, tablinks1;
                      tabcontent1 = document.getElementsByClassName("tabcontent1");
                      for (i = 0; i < tabcontent1.length; i++) {
                        tabcontent1[i].style.display = "none";
                      }
                      tablinks1 = document.getElementsByClassName("tablinks1");
                      for (i = 0; i < tablinks1.length; i++) {
                        tablinks1[i].className = tablinks1[i].className.replace(" active1", "");
                      }
                      document.getElementById(tabname).style.display = "block";
                      evt.currentTarget.className += " active1";
                    }
                  
                    let slideIndex = 1;
                    showSlides(slideIndex);
                    
                    function plusSlides(n) {
                      showSlides(slideIndex += n);
                    }
                    
                    function currentSlide(n) {
                      showSlides(slideIndex = n);
                    }
                    
                    function showSlides(n) {
                      let i;
                      let slides = document.getElementsByClassName("mySlides");
                      let dots = document.getElementsByClassName("dot");
                      if (n > slides.length) {slideIndex = 1}    
                      if (n < 1) {slideIndex = slides.length}
                      for (i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none";  
                      }
                      for (i = 0; i < dots.length; i++) {
                        dots[i].className = dots[i].className.replace(" active", "");
                      }
                      slides[slideIndex-1].style.display = "block";  
                      dots[slideIndex-1].className += " active";
                    }