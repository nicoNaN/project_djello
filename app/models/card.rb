class Card < ActiveRecord::Base
  has_one :list
  has_many :members, class_name: "User"
  has_many :activities
end
