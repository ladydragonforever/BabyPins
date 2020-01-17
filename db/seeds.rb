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

    demo_user = User.create!(email: 'NewDaddy@demo.com', password: '123456')

    pictures = {
        '1' => {
            'title' => 'Cuttest baby in the world',
            'description' => 'This is Frog s baby boy. Look at his charby cheeks. Soooo cute! ',
        }, 
        '2' => {
            'title' => 'Baby loves vacation as well',
            'description' => 'Let me think... what should I order as drink?',
        }, 

        '3' => {
            'title' => 'Marry me! Love!',
            'description' => 'I am ready. Are you?',
        }, 
        '4' => {
            'title' => 'I just want to taste the cake!',
            'description' => 'I do not understand why adults use utensils.',
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

        '9' => {
            'title' => 'baby9',
            'description' => '',
        }, 
        '10' => {
            'title' => 'baby10',
            'description' => '',
        }, 
        '11' => {
            'title' => 'baby11',
            'description' => '',
        }, 
        '12' => {
            'title' => 'baby12',
            'description' => '',
        }, 
        '13' => {
            'title' => 'baby13',
            'description' => '',
        }, 
        '14' => {
            'title' => 'baby14',
            'description' => '',
        }, 
        '15' => {
            'title' => 'baby15',
            'description' => '',
        }, 
        '16' => {
            'title' => 'baby16',
            'description' => '',
        }, 
        '17' => {
            'title' => 'baby17',
            'description' => '',
        }, 
        '18' => {
            'title' => 'baby18',
            'description' => '',
        }, 
        '19' => {
            'title' => 'baby19',
            'description' => '',
        }, 
        '20' => {
            'title' => 'baby20',
            'description' => '',
        }, 
        '21' => {
            'title' => 'baby21',
            'description' => '',
        }, 
        '22' => {
            'title' => 'baby22',
            'description' => '',
        }, 
        '23' => {
            'title' => 'baby23',
            'description' => '',
        }, 
        '24' => {
            'title' => 'baby24',
            'description' => '',
        }, 
        '25' => {
            'title' => 'baby25',
            'description' => '',
        }, 
        '26' => {
            'title' => 'baby26',
            'description' => '',
        }, 
        '27' => {
            'title' => 'baby27',
            'description' => '',
        }, 
        '28' => {
            'title' => 'baby28',
            'description' => '',
        }, 
        '29' => {
            'title' => 'baby29',
            'description' => '',
        }, 
        '30' => {
            'title' => 'baby30',
            'description' => '',
        }, 
        '31' => {
            'title' => 'baby31',
            'description' => '',
        }, 
        '32' => {
            'title' => 'baby32',
            'description' => '',
        }, 
        '33' => {
            'title' => 'baby33',
            'description' => '',
        }, 
        '34' => {
            'title' => 'baby34',
            'description' => '',
        }, 
        '35' => {
            'title' => 'baby35',
            'description' => '',
        }, 
        '36' => {
            'title' => 'baby36',
            'description' => '',
        }, 
        '37' => {
            'title' => 'baby37',
            'description' => '',
        }, 
        '38' => {
            'title' => 'baby38',
            'description' => '',
        }, 
        '39' => {
            'title' => 'baby39',
            'description' => '',
        }, 
        '40' => {
            'title' => 'baby40',
            'description' => '',
        }, 
        '41' => {
            'title' => 'baby41',
            'description' => '',
        }, 
        '42' => {
            'title' => 'baby42',
            'description' => '',
        }, 
        '43' => {
            'title' => 'baby43',
            'description' => '',
        }, 
        '44' => {
            'title' => 'baby44',
            'description' => '',
        }, 
        '45' => {
            'title' => 'baby45',
            'description' => '',
        }, 
        '46' => {
            'title' => 'baby46',
            'description' => '',
        }, 
        '47' => {
            'title' => 'baby47',
            'description' => '',
        }, 
        '48' => {
            'title' => 'baby48',
            'description' => '',
        }, 
        '49' => {
            'title' => 'baby49',
            'description' => '',
        }, 
        '50' => {
            'title' => 'baby50',
            'description' => '',
        }, 
        '51' => {
            'title' => 'baby51',
            'description' => '',
        }, 
        '52' => {
            'title' => 'baby52',
            'description' => '',
        }, 
        '53' => {
            'title' => 'baby53',
            'description' => '',
        }, 
        '54' => {
            'title' => 'baby54',
            'description' => '',
        }, 
        # '24' => {
        #     'title' => 'baby24',
        #     'description' => '',
        # }, 
        # '24' => {
        #     'title' => 'baby24',
        #     'description' => '',
        # }, 
        # '24' => {
        #     'title' => 'baby24',
        #     'description' => '',
        # }, 
        # '24' => {
        #     'title' => 'baby24',
        #     'description' => '',
        # }, 
        # '24' => {
        #     'title' => 'baby24',
        #     'description' => '',
        # }, 
        # '24' => {
        #     'title' => 'baby24',
        #     'description' => '',
        # }, 
        # '24' => {
        #     'title' => 'baby24',
        #     'description' => '',
        # }, 
        # '24' => {
        #     'title' => 'baby24',
        #     'description' => '',
        # }, 
        # '24' => {
        #     'title' => 'baby24',
        #     'description' => '',
        # }, 
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

    board3 = Board.create!(title: "To share with daddy", description: "", user_id: demo_user.id) 
    boards << board3

    board4 = Board.create!(title: "Baby nursery", description: "", user_id: demo_user.id)
    pictures_array = Picture.all.to_a
    
    pin1 = Pin.create!(picture_id: pictures_array[0].id , board_id: board1.id)
    pin5 = Pin.create!(picture_id: pictures_array[4].id , board_id: board2.id) 
    pin6 = Pin.create!(picture_id: pictures_array[5].id , board_id: board2.id) 
    pin7 = Pin.create!(picture_id: pictures_array[6].id , board_id: board2.id) 
    pin9 = Pin.create!(picture_id: pictures_array[9].id , board_id: board3.id) 
    pin10 = Pin.create!(picture_id: pictures_array[10].id , board_id: board3.id) 
    pin11 = Pin.create!(picture_id: pictures_array[11].id , board_id: board3.id) 
    pin12 = Pin.create!(picture_id: pictures_array[12].id , board_id: board3.id) 
    pin13 = Pin.create!(picture_id: pictures_array[15].id , board_id: board4.id) 
    pin14 = Pin.create!(picture_id: pictures_array[16].id , board_id: board4.id) 
    pin15 = Pin.create!(picture_id: pictures_array[17].id , board_id: board4.id) 
    pin16 = Pin.create!(picture_id: pictures_array[21].id , board_id: board4.id) 
    
    
    

    # boards.each do |board|
    #     num_pics = rand(4..8)
    #     selected_pics = pictures_array.shuffle.sample(num_pics)

    #     selected_pics.each do |pic| 
    #      Pin.create!(picture_id: pic.id, board_id: board.id)
    #     end
    # end

    
end