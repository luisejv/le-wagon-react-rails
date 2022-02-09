class Restaurant < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  validates :name, presence: true
  validates :address, presence: true
end
