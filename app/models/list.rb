class List < ActiveRecord::Base
  has_one :board
  has_many :cards
end
