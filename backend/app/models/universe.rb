class Universe < ApplicationRecord
    has_many :characters
    validates :name, presence: true, uniqueness: true
    validates :type_of, presence: true

end
