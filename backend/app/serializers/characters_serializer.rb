class CharactersSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :type_of, :universe_id, :description
end
