

@boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :title, :description, :classified_pic_ids
        json.four_pics board.classified_pics[0..3].map {|pic| asset_path("babies/#{pic.image_url}")}
    end
end