user = User.find_or_initialize_by(email: 'john@rambo.com')
user.password = 'password'
user.password_confirmation = 'password'

restaurant = user.restaurants.find_or_initialize_by(name: 'Bellagamba', address: 'Armenia St')
restaurant2 = user.restaurants.find_or_initialize_by(name: 'Zitto', address: 'Aristides St')

user.save