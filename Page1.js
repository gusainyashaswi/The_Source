var searchButton = document.getElementById('searchBtn');
        
        
        var searchContainer = document.getElementById('searchContainer');
        
        
        var searchInput = document.getElementById('searchInput');
        
        
        var suggestionsBox = document.getElementById('suggestionsBox');
        
        
        var closeButton = document.getElementById('closeSearch');
        
        
        
        
        
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
        
        
        
        
        searchButton.addEventListener('click', function(event) {
            
            event.preventDefault();
            
            
            if (searchContainer.style.display === 'block') {
                searchContainer.style.display = 'none';
            } else {
                searchContainer.style.display = 'block';
                
                searchInput.focus();
            }
        });
        
        
        
        
        closeButton.addEventListener('click', function() {
            searchContainer.style.display = 'none';
            
            searchInput.value = '';
            
            suggestionsBox.style.display = 'none';
            suggestionsBox.innerHTML = '';
        });
        
        
        
        
        searchInput.addEventListener('input', function() {
            
            var userInput = searchInput.value.toLowerCase();
            
            
            suggestionsBox.innerHTML = '';
            
            
            if (userInput === '') {
                suggestionsBox.style.display = 'none';
                return;  
            }
            
            
            var matchingSuggestions = [];
            
            
            for (var i = 0; i < suggestions.length; i++) {
                
                if (suggestions[i].toLowerCase().includes(userInput)) {
                    
                    matchingSuggestions.push(suggestions[i]);
                }
            }
            
            
            if (matchingSuggestions.length > 0) {
                suggestionsBox.style.display = 'block';
                
                
                for (var j = 0; j < matchingSuggestions.length; j++) {
                    
                    var suggestionDiv = document.createElement('div');
                    suggestionDiv.className = 'suggestion-item';
                    suggestionDiv.innerText = matchingSuggestions[j];
                    
                    
                    suggestionDiv.addEventListener('click', function() {
                        searchInput.value = this.innerText;
                        suggestionsBox.style.display = 'none';
                    });
                    
                    
                    suggestionsBox.appendChild(suggestionDiv);
                }
            } else {
                
                suggestionsBox.style.display = 'none';
            }
        });
        
        
        
        
        document.addEventListener('click', function(event) {
            
            var isClickInsideSearch = searchContainer.contains(event.target);
            var isClickOnButton = searchButton.contains(event.target);
            
            
            if (!isClickInsideSearch && !isClickOnButton) {
                searchContainer.style.display = 'none';
                searchInput.value = '';
                suggestionsBox.style.display = 'none';
                suggestionsBox.innerHTML = '';
            }
        });