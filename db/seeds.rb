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
    Picture.destroy_all
    Board.destroy_all
    Pin.destroy_all

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
    
    boards = []
    board1 = Board.create!(title: "funny baby pics", description: "", user_id: demo_user.id)
    boards << board1
    board2 = Board.create!(title: "cute baby pics", description: "", user_id: demo_user.id)
    boards << board2
    
    pictures_array = Picture.all.to_a
    

    boards.each do |board|
        num_pics = rand(4..8)
        selected_pics = pictures_array.shuffle.sample(num_pics)

        selected_pics.each do |pic| 
         Pin.create!(picture_id: pic.id, board_id: board.id)
        end
    end

    
end