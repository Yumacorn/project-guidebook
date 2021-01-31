class Universe < ApplicationRecord
    has_many :characters
    validates :name,:type presence: true
end
