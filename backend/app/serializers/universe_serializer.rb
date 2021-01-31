class UniverseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :type_of
end
