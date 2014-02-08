class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :email
      t.string :ip_address

      t.timestamps
    end
  end
end
