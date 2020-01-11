@boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :title, :description, :classified_pictures
    end
end