class Universe < ApplicationRecord
    has_many :characters
    validates :name, presence: true
    validates :type_of, presence: true

end
