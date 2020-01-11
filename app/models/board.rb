class Board < ApplicationRecord
    validates :user_id, presence: true

    has_many :pins
    belongs_to :user
   
    has_many :classified_pictures,
    through: :pins,
    source: :picture

end
