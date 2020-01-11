class Pin < ApplicationRecord
    validates :picture_id, :board_id, presence: true
    validates :picture_id, uniqueness: { scope: :board_id }

    belongs_to :board

    belongs_to :picture
  
end
