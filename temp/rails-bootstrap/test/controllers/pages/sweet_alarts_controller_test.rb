require "test_helper"

class Pages::SweetAlartsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pages_sweet_alarts_index_url
    assert_response :success
  end
end
