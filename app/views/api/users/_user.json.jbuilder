json.extract! user, :id, :email, :board_ids

json.pinned_pics user.pinned_pics.map {|pic| {id: pic.id, url: asset_path("babies/#{pic.image_url}")}}


