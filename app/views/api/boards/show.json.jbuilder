json.extract! @board, :id, :title, :description, :classified_pic_ids
json.pictures @board.classified_pics.map {|pic| {id: pic.id, url: asset_path("babies/#{pic.image_url}")} }
