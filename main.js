const values = ['areafxwt', 'areafxtemp', 'areafxw', 'areafxwtseries', 'frequencyfxwt', 'frequencyfxw', 'frequencyfxtemp'];

const texts = [
"In recent years there has been an increase in wildfire incidence in the US and worldwide. In particular, the southwestern United States, Siberia, and Australia have suffered greatly from such blazes. It's obvious that the fire season is in whatever the summer months are for a country -- in this graph, it shows the area burned by month in the United States. It makes sense that the summer months, which are hot, dry, and windy (at least, in the Southwest) would be the prime time for wildfires. However, it's not wind and temperature by themselves that contribute to the widespread effects of these fires.",
"While wind and heat combine to produce wildfire-friendly conditions, temperature on its own contributes highly to this incidence of wildfires. Higher temperatures cause drier conditions, which provides tinder for fires to start. These hot and dry conditions not only lengthen wildfire season, but they lengthen the time in which insects like the mountain pine beetle can weaken or kill trees, which further builds up the amount of burnable material.",
"As shown here, wind on its own is not an good predictor of wildfires. It is only a good predictor in conjunction with temperature, as we saw in the first graph. This should make us optimistic; if temperature is the key contributor, and the concept of anthropogenic (human-caused) global temperature shift is valid, we as agents have the ability and agency to limit environmental catastrophes like wildfires in part by changing the way the world is powered. ",
"n/a",
"n/a",
"n/a",
"n/a"];

function setStyle(id){
	var instance;
	values.forEach(value => {
		instance = document.getElementById(value);
		instance.style.display = 'none';
	});
	instance = document.getElementById(id);
	instance.style.display = 'block';

	var textbox = document.getElementById('wildfiretext');
	textbox.innerHTML = texts[values.indexOf(id)];
};

