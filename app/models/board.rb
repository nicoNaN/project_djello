class Board < ActiveRecord::Base
  has_many :user_boards
  has_many :users, through: :user_boards
  has_many :lists
end
