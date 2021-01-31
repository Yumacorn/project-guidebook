class Character < ApplicationRecord
  belongs_to :universe
  validates :name,:type presence: true
end
