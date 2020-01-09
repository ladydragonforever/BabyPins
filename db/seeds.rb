# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 
    User.destroy_all
    Picture.destroy_all

    demo_user = User.create!(email: 'demo@demo.com', password: '123456')

    pictures = {
        '1' => {
            'title' => 'baby1',
            'description' => '',
        }, 
        '2' => {
            'title' => 'baby2',
            'description' => '',
        }, 

        '3' => {
            'title' => 'baby3',
            'description' => '',
        }, 
        '4' => {
            'title' => 'baby4',
            'description' => '',
        }, 
        '5' => {
            'title' => 'baby5',
            'description' => '',
        }, 
        '6' => {
            'title' => 'baby6',
            'description' => '',
        }, 
        '7' => {
            'title' => 'baby7',
            'description' => '',
        }, 
        '8' => {
            'title' => 'baby8',
            'description' => '',
        }, 
    }

    pictures = pictures.map do |num, picture|
        picture['image_url'] = "#{num}.jpg"
        picture
    end

    Picture.create!(pictures)
    
end