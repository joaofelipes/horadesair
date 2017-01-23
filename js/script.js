// Extendendo a classe date
Date.prototype.addSeconds = function(seconds) {
            this.setSeconds(this.getSeconds() + seconds);
            return this;
        };

        Date.prototype.addMinutes = function(minutes) {
            this.setMinutes(this.getMinutes() + minutes);
            return this;
        };

        Date.prototype.addHours = function(hours) {
            this.setHours(this.getHours() + hours);
            return this;
        };

        Date.prototype.addDays = function(days) {
            this.setDate(this.getDate() + days);
            return this;
        };

        Date.prototype.addWeeks = function(weeks) {
            this.addDays(weeks*7);
            return this;
        };

        Date.prototype.addMonths = function (months) {
            var dt = this.getDate();

            this.setMonth(this.getMonth() + months);
            var currDt = this.getDate();

            if (dt !== currDt) {  
                this.addDays(-currDt);
            }

            return this;
        };

        Date.prototype.addYears = function(years) {
            var dt = this.getDate();

            this.setFullYear(this.getFullYear() + years);

            var currDt = this.getDate();

            if (dt !== currDt) {  
                this.addDays(-currDt);
            }

            return this;
        };

function dothemath() {
	var ent_hh = parseInt($(".entrada").val().split(":")[0]);
	var ent_mn = parseInt($(".entrada").val().split(":")[1]);
	var ent_time = new Date();
	ent_time.setHours(ent_hh,ent_mn,00);
	var al1_hh = parseInt($(".almoco1").val().split(":")[0]);
	var al1_mn = parseInt($(".almoco1").val().split(":")[1]);
	var al1_time = new Date();
	al1_time.setHours(al1_hh,al1_mn,00);
	var al2_hh = parseInt($(".almoco2").val().split(":")[0]);
	var al2_mn = parseInt($(".almoco2").val().split(":")[1]);
	var al2_time = new Date();
	al2_time.setHours(al2_hh,al2_mn,00);
	var ht_hh = parseInt($(".horas").val().split(":")[0]);
	var ht_mn = parseInt($(".horas").val().split(":")[1]);
	var ht_time = new Date();
	ht_time.setHours(ht_hh,ht_mn,00);
	
	var entrada = moment(ent_time);
	var almoco1 = moment(al1_time);
	var almoco2 = moment(al2_time);
	var horastb = moment(ht_time);

	almoco_minutos = almoco2.diff(almoco1, "minutes");
	var saida = entrada.add(ht_hh, 'h');
	saida = saida.add(ht_mn, 'm').add(almoco_minutos, 'm');

	$( ".result" ).html('Você pode sair às ' + saida.format("HH:mm"));
	$('.result').show();
	localStorage.setItem("totalworkhours", $(".horas").val());
	localStorage.setItem("almoco1", $(".almoco1").val());
	localStorage.setItem("almoco2", $(".almoco2").val());
}

$( document ).ready(function(){
    $( ".btnok" ).on( "click", dothemath );
    $('.clockpicker').clockpicker();
	$('.horas').mask('00:00:00');

	//Restaura horas utlizadas no ultimo acesso
	if (localStorage.getItem("totalworkhours") == null) {
		localStorage.setItem("totalworkhours", "08:00");	
	}
	if (localStorage.getItem("almoco1") == null) {		
		localStorage.setItem("almoco1", "12:00");
	}
	if (localStorage.getItem("almoco2") == null) {				
		localStorage.setItem("almoco2", "13:15");
	} 
	var totalworkhours = localStorage.getItem("totalworkhours");
	var almoco1 = localStorage.getItem("almoco1");
	var almoco2 = localStorage.getItem("almoco2");
	$(".horas").val(totalworkhours);
	$(".almoco1").val(almoco1);
	$(".almoco2").val(almoco2);

});



