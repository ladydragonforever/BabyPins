json.extract! user, :id, :email, :board_ids

json.pinned_pics user.pinned_pics.map {|pic| asset_path("babies/#{pic.image_url}")}


