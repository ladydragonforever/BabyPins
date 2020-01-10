json.extract! picture, :id, :title, :description
json.image_url asset_path("babies/#{picture.image_url}")