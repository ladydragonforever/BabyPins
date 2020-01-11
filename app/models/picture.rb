class Picture < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :image_url, presence: true

    has_many :pins
    
    
end
