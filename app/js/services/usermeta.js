app.factory('usermeta', function($rootScope) {
    var potentialNames = [
        'Master Chief',
        'Duke Nukem',
        'Conker',
        'Soap McTavish',
        'Leeroy Jenkins',
        'OmniKnight',
        'Teemo',
        'Kratos',
        'Nathan Drake',
        'Cousin Nico',
        'Doom Guy',
        'Ryu Hyabusa',
        'Wesker',
        'Solaire',
        'Solid Snake',
        'Richter Belmont',
        'Lara Croft',
        'Ezio Auditore',
        'Frank West',
        'Cloud Strife',
        'Diablo',
        'Sack Boy',
        'Sam Fisher',
        'Dovahkiin'
    ];

    return {
        getUsername: function() {
            var randomIndex = Math.floor(Math.random() * potentialNames.length) + 1;
            var username = potentialNames[randomIndex];
            return username;
        },
    }
});
