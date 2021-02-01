class CharactersController < ApplicationController

    before_action :set_universe
    def index
        @characters = @universe.characters
        # render json: @characters
        serialized_data = CharacterSerializer.new(@characters)
        render json: serialized_data
    end

    def create
        @character = @universe.characters.new(character_params)
        if @character.save
            # render json: @character
            serialized_data = CharacterSerializer.new(@character)
            render json: serialized_data
        else
            render json: {error_message: "Failed to create character"}
        end
    end

    def update
        @character = Character.find(params[:id])
        binding.pry
        # render json: @character
        serialized_data = CharacterSerializer.new(@character)
        render json: serialized_data
    end

    def show
        @character = Character.find(params[:id])
        # render json: @character    
        serialized_data = CharacterSerializer.new(@character)
        render json: serialized_data    
    end
    
    def destroy
        @character = Character.find(params[:id])
        @character.destroy
    end

    private

    def set_universe 
        @universe = Universe.find(params[:universe_id])
    end

    def character_params
        params.require(:character).permit(:name, :type_of, :universe_id, :description)
    end
end
