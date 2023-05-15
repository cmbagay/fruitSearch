const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papayas', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function searchHandler(e) {//input.addEventListener function
	// 5 Create an event listener in JavaScript that will trigger when a user types.
	let searchInput = e.target.value;
	console.log('keyup value = ', searchInput); // test input

	search(searchInput);
}

function search(str) {
	// 6 Write a function called search(), which will trigger based on the event listener you created in the last step. This function will return a list called results. This function will filter the fruit list based on whatever user input is in the search box. If the string in the user input appears ANYWHERE in the fruit name, it should be added to results list. It also should not matter if a user types upper or lower case letters. That means that if a user types “ap” both “Apple” and “Grape” will appear in the results list. 
	console.log('Search Handler input was recieved!');

	let results = [];
	let lcStr = str.toLowerCase(); //str will come from searchHandlet input

	fruit.forEach(fruitSearch => {
		let lcFruit = fruitSearch.toLowerCase();

		if (lcFruit.includes(lcStr) && lcFruit !== '') {
			results.push(lcFruit);
			console.log('results = ', results);
		}
	});

	showSuggestions(results, lcStr);
	return results;
}



function showSuggestions(results, inputVal) {
	//7 Take the list created in the previous step in a drop down list below the search bar.
	suggestions.innerText = '';
	if (inputVal !== '') { //show list, once input is made
		for (let suggestedFruit of results) {
			const suggested = document.createElement('li'); //create suggestion element
			suggested.innerText = suggestedFruit; //set innerText value

			suggestions.append(suggested); //append li to suggestion ul element
		}
	}

}

function useSuggestion(e) {
	// TODO 9 When a user clicks on a suggestion, that string should fill the Search Bar. Add an event listener which triggers when a user clicks. Write a function useSuggestion() to populate the Search Bar with the suggestion. Add this function to the event listener.

	let chosenFruit = e.target.innerText;
	console.log('Choosing Fruit: ', chosenFruit);

	input.value = chosenFruit;
	suggestions.innerText = '';

}

input.addEventListener('keyup', searchHandler);

//8 Add an event listener to trigger whenever a user hovers over one of the suggestions in the drop down list. Write a function which highlights the suggestion. Attach this function to the event listener.
suggestions.addEventListener('click', useSuggestion);
