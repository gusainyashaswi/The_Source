var searchButton = document.getElementById('searchBtn');
        
        // Get the search container (the whole search box)
        var searchContainer = document.getElementById('searchContainer');
        
        // Get the input field where user types
        var searchInput = document.getElementById('searchInput');
        
        // Get the suggestions box where suggestions appear
        var suggestionsBox = document.getElementById('suggestionsBox');
        
        // Get the close button
        var closeButton = document.getElementById('closeSearch');
        
        
        // ========== STEP 2: CREATE AN ARRAY OF SEARCH SUGGESTIONS ==========
        
        // These are the words that will appear as suggestions
        var suggestions = [
            'The Source',
            'The Source+',
            'PS5 Version',
            'Xbox Series X|S Version',
            'PC Version',
            'Buy Now',
            'Game Progress',
            'Achievements',
            'Devbhoomi',
            'Uttarakhand',
            'Kedarnath',
            'Kumaon Region',
            'Premium Membership'
        ];
        
        
        // ========== STEP 3: SHOW/HIDE SEARCH BOX WHEN BUTTON IS CLICKED ==========
        
        searchButton.addEventListener('click', function(event) {
            // Prevent the link from doing anything
            event.preventDefault();
            
            // Toggle the search box (show if hidden, hide if shown)
            if (searchContainer.style.display === 'block') {
                searchContainer.style.display = 'none';
            } else {
                searchContainer.style.display = 'block';
                // Put cursor in the input field
                searchInput.focus();
            }
        });
        
        
        // ========== STEP 4: CLOSE SEARCH BOX WHEN X IS CLICKED ==========
        
        closeButton.addEventListener('click', function() {
            searchContainer.style.display = 'none';
            // Clear the input field
            searchInput.value = '';
            // Hide suggestions
            suggestionsBox.style.display = 'none';
            suggestionsBox.innerHTML = '';
        });
        
        
        // ========== STEP 5: FILTER SUGGESTIONS AS USER TYPES ==========
        
        searchInput.addEventListener('input', function() {
            // Get what the user typed (convert to lowercase for easy matching)
            var userInput = searchInput.value.toLowerCase();
            
            // Clear previous suggestions
            suggestionsBox.innerHTML = '';
            
            // If user hasn't typed anything, hide suggestions
            if (userInput === '') {
                suggestionsBox.style.display = 'none';
                return;  // Stop here
            }
            
            // Array to store matching suggestions
            var matchingSuggestions = [];
            
            // Loop through all suggestions
            for (var i = 0; i < suggestions.length; i++) {
                // Check if suggestion includes what user typed
                if (suggestions[i].toLowerCase().includes(userInput)) {
                    // Add it to matching suggestions
                    matchingSuggestions.push(suggestions[i]);
                }
            }
            
            // If we found matching suggestions, show them
            if (matchingSuggestions.length > 0) {
                suggestionsBox.style.display = 'block';
                
                // Create HTML for each matching suggestion
                for (var j = 0; j < matchingSuggestions.length; j++) {
                    // Create a div for each suggestion
                    var suggestionDiv = document.createElement('div');
                    suggestionDiv.className = 'suggestion-item';
                    suggestionDiv.innerText = matchingSuggestions[j];
                    
                    // When user clicks a suggestion, put it in the search box
                    suggestionDiv.addEventListener('click', function() {
                        searchInput.value = this.innerText;
                        suggestionsBox.style.display = 'none';
                    });
                    
                    // Add this suggestion to the suggestions box
                    suggestionsBox.appendChild(suggestionDiv);
                }
            } else {
                // No matches found, hide suggestions
                suggestionsBox.style.display = 'none';
            }
        });
        
        
        // ========== STEP 6: CLOSE SEARCH WHEN CLICKING OUTSIDE ==========
        
        document.addEventListener('click', function(event) {
            // Check if click was outside the search container and search button
            var isClickInsideSearch = searchContainer.contains(event.target);
            var isClickOnButton = searchButton.contains(event.target);
            
            // If click was outside both, close the search
            if (!isClickInsideSearch && !isClickOnButton) {
                searchContainer.style.display = 'none';
                searchInput.value = '';
                suggestionsBox.style.display = 'none';
                suggestionsBox.innerHTML = '';
            }
        });