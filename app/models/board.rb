class Board < ActiveRecord::Base
  has_one :user
  has_many :lists
end
