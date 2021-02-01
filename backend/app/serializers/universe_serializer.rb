class UniverseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :type_of
  has_many :characters
end
