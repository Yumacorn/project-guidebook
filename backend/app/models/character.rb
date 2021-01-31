class Character < ApplicationRecord
  belongs_to :universe
  validates :name, presence: true, uniqueness: true
  validates :type_of, presence: true
end
